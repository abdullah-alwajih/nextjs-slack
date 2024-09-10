// hooks/useProfileActions.js
import {toast} from "sonner";
import {useUpdateMember} from "../api/use-update-member";
import {useRemoveMember} from "../api/use-remove-member";
import {useConfirm} from "@/hooks/use-confirm";
import {useRouter} from "next/navigation";
import {Id} from "../../../../convex/_generated/dataModel";
import {useWorkspaceId} from "@/hooks/use-workspace-id";
import {useCurrentMember} from "@/features/members/api/use-current-member";
import {useGetMember} from "@/features/members/api/use-get-member";

export interface ProfileProps {
  memberId: Id<"members">;
  onClose: () => void;
}

export const useProfileActions = ({memberId, onClose}: ProfileProps) => {

  const router = useRouter();

  const workspaceId = useWorkspaceId();

  const {data: currentMember, isLoading: isLoadingCurrentMember} = useCurrentMember({workspaceId});
  const {data: member, isLoading: isLoadingMember} = useGetMember({id: memberId,});

  const avatarFallback = member?.user?.name?.[0] ?? "M";


  const {mutate: updateMember} =
    useUpdateMember();
  const {mutate: removeMember} =
    useRemoveMember();

  const [LeaveDialog, confirmLeave] = useConfirm(
    "Leave Workspace",
    "Are you sure you want to leave this workspace?"
  );

  const [RemoveDialog, confirmRemove] = useConfirm(
    "Remove member",
    "Are you sure you want to remove this member?"
  );

  const [UpdateDialog, confirmUpdate] = useConfirm(
    "Change role",
    "Are you sure you want to change this members role?"
  );


  const handleRemove = async () => {
    const ok = await confirmRemove();
    if (ok) {
      removeMember(
        {id: memberId},
        {
          onSuccess: () => {
            toast.success("Member removed");
            onClose();
          },
          onError: () => {
            toast.error("Failed to remove member");
          },
        }
      );
    }
  };

  const handleLeave = async () => {
    const ok = await confirmLeave();
    if (ok) {
      removeMember(
        {id: memberId},
        {
          onSuccess: () => {
            router.replace("/");
            toast.success("You left the workspace");
            onClose();
          },
          onError: () => {
            toast.error("Failed to leave the workspace");
          },
        }
      );
    }
  };

  const handleUpdate = async (role: "admin" | "member") => {
    const ok = await confirmUpdate();

    if (ok) {
      updateMember(
        {id: memberId, role},
        {
          onSuccess: () => {
            toast.success("Role changed");
            onClose();
          },
          onError: () => {
            toast.error("Failed to change role");
          },
        }
      );
    }
  };


  return {
    handleLeave,
    handleRemove,
    handleUpdate,
    LeaveDialog,
    RemoveDialog,
    UpdateDialog,
    avatarFallback,  // Avatar fallback value
    currentMember,
    isLoadingCurrentMember,
    member,
    isLoadingMember,
  };
};