import {api} from "../../../../convex/_generated/api";
import {Id} from "../../../../convex/_generated/dataModel";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type RequestType = {
  body: string,
  id: Id<"messages">,
};
type ResponseType = Id<"messages"> | null;

export const useUpdateMessage = () => {
  return useConvexMutation<RequestType, ResponseType>(api.messages.update);
};
