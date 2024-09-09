import {api} from "../../../../convex/_generated/api";
import {Id} from "../../../../convex/_generated/dataModel";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = {
  id: Id<'members'>
  role: 'admin' | 'member'
};
type ResponseType = Id<"members"> | null;

export const useUpdateMember = () => {
  return useConvexMutation<RequestType, ResponseType>(api.members.update);
};
