// useConvexMutation.ts
import {useMutation} from 'convex/react';
import {useCallback, useMemo, useState} from 'react';
import {FunctionReference} from "convex/server";

type MutationStatus = 'success' | 'error' | 'settled' | 'pending' | null;

type Options<ResponseType> = {
  onSuccess?: (data: ResponseType) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  throwError?: boolean;
};

export function useConvexMutation<RequestType, ResponseType>(
  mutationFunction: FunctionReference<"mutation">
) {
  const [data, setData] = useState<ResponseType | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<MutationStatus>(null);

  const mutation = useMutation(mutationFunction);

  const mutate = useCallback(
    async (values: RequestType, options?: Options<ResponseType>) => {
      try {
        setData(null);
        setError(null);
        setStatus('pending');
        const response = await mutation(values);
        options?.onSuccess?.(response);
        return response;
      } catch (error) {
        setStatus('error');
        options?.onError?.(error as Error);
        if (options?.throwError) {
          throw error;
        }
      } finally {
        setStatus('settled');
        options?.onSettled?.();
      }
    },
    [mutation]
  );

  const statusFlags = useMemo(() => ({
    isPending: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    isSettled: status === 'settled'
  }), [status]);

  return {mutate, data, error, ...statusFlags};
}