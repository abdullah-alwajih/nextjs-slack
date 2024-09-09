import {api} from '../../../../convex/_generated/api';
import {Id} from '../../../../convex/_generated/dataModel';
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = { id: Id<"channels"> }
type ResponseType = Id<"channels"> | null


export const useRemoveChannel = () => {
  return useConvexMutation<RequestType, ResponseType>(api.channels.remove);
};
