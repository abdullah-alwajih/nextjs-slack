import {api} from '../../../../convex/_generated/api';
import {Id} from '../../../../convex/_generated/dataModel';
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type ResponseType = Id<"channels"> | null
type RequestType = { name: string; id: Id<"channels"> }

export const useUpdateChannel = () => {
  return useConvexMutation<RequestType, ResponseType>(api.channels.update);
};
