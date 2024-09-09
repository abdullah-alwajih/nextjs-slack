import {api} from "../../../../convex/_generated/api";
import {useConvexMutation} from "@/features/api/use-convex-mutation";

type ResponseType = string | null;

export const useGenerateUploadUrl = () => {
  return useConvexMutation<object, ResponseType>(api.upload.generateUploadUrl);
}
