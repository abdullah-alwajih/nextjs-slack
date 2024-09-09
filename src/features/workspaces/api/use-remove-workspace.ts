import {api} from '../../../../convex/_generated/api';
import {Id} from '../../../../convex/_generated/dataModel';
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = { id: Id<"workspaces"> }
type ResponseType = Id<'workspaces'> | null;

export const useRemoveWorkspace = () => {
  return useConvexMutation<RequestType, ResponseType>(api.workspaces.remove);
};
