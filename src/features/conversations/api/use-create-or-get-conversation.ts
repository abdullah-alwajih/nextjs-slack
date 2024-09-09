import {api} from "../../../../convex/_generated/api";
import {Id} from "../../../../convex/_generated/dataModel";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = {
  workspaceId: Id<"workspaces">,
  memberId: Id<"members">
};
type ResponseType = Id<"conversations"> | null;


export const useCreateOrGetConversation = () => {
  return useConvexMutation<RequestType, ResponseType>(api.conversations.createOrGet);
};
