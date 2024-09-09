import {api} from "../../../../convex/_generated/api";
import {Id} from "../../../../convex/_generated/dataModel";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = {
  value: string,
  messageId: Id<"messages">,
};
type ResponseType = Id<"reactions"> | null;

export const useToggleReaction = () => {
  return useConvexMutation<RequestType, ResponseType>(api.reactions.toggle);
};
