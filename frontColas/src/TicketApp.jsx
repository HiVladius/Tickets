import { SocketProvider } from "./context/SocketContext";
import { UiProvider } from "./context/UIContext";
import RouterPages from "./pages/RouterPages";

const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPages />
      </UiProvider>
    </SocketProvider>
  );
};

export default TicketApp;
