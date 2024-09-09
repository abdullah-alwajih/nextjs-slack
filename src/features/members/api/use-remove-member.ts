import {api} from "../../../../convex/_generated/api";
import {Id} from "../../../../convex/_generated/dataModel";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = {
  id: Id<'members'>
};
type ResponseType = Id<"members"> | null;

export const useRemoveMember = () => {
  return useConvexMutation<RequestType, ResponseType>(api.members.remove);
};
