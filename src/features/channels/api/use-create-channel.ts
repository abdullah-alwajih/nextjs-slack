import {api} from '../../../../convex/_generated/api';
import {Id} from '../../../../convex/_generated/dataModel';
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type ResponseType = Id<"channels"> | null
type RequestType = { name: string; workspaceId: Id<"workspaces"> }

export const useCreateChannel = () => {
  return useConvexMutation<RequestType, ResponseType>(api.channels.create);
};
