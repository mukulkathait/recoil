import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function Topbar() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const NotificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  function showCount(count) {
    return count > 99 ? "99+" : count;
  }

  return (
    <>
      <button>Home</button>

      <button>My Networks ({showCount(networkNotificationCount)})</button>
      <button>Jobs ({showCount(jobsNotificationCount)})</button>
      <button>Messaging ({showCount(messagingNotificationCount)})</button>
      <button>Notifications ({showCount(NotificationCount)})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default Topbar;
