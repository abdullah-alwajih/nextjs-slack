import {api} from '../../../../convex/_generated/api';
import {Id} from '../../../../convex/_generated/dataModel';
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = { name: string };
type ResponseType = Id<'workspaces'> | null;


export const useCreateWorkspace = () => {
  return useConvexMutation<RequestType, ResponseType>(api.workspaces.create);
};
