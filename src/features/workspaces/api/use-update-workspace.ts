import {api} from '../../../../convex/_generated/api';
import {Id} from '../../../../convex/_generated/dataModel';
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type ResponseType = Id<'workspaces'> | null;
type RequestType = { id: Id<"workspaces">, name: string }

export const useUpdateWorkspace = () => {
  return useConvexMutation<RequestType, ResponseType>(api.workspaces.update);
};
