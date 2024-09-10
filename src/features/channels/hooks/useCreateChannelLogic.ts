import {useState} from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {useCreateChannel} from "../api/use-create-channel";
import {useWorkspaceId} from "@/hooks/use-workspace-id";
import {useCreateChannelModal} from "@/features/channels/store/use-create-channel-modal";

export const useCreateChannelLogic = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const {mutate, isPending} = useCreateChannel();
  const [open, setOpen] = useCreateChannelModal();
  const [name, setName] = useState("");

  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
    setName(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      {name, workspaceId},
      {
        onSuccess: (id) => {
          toast.success("Channel created");
          router.push(`/workspace/${workspaceId}/channel/${id}`);
          handleClose();
        },
        onError: () => toast.error("Failed to create channel"),
      }
    );
  };

  return {
    open,
    name,
    isPending,
    handleChange,
    handleSubmit,
    handleClose,
  };
};