import {api} from "../../../../convex/_generated/api";
import {Id} from "../../../../convex/_generated/dataModel";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = {
  id: Id<"messages">,
};
type ResponseType = Id<"messages"> | null;

export const useRemoveMessage = () => {
  return useConvexMutation<RequestType, ResponseType>(api.messages.remove);
};
