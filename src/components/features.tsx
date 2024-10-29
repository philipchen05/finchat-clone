import Notifications from "../components/notifications"
import Data from "../components/data"
import Assistant from "../components/assistant"
import Chat from "../components/chat"
import Customize from "../components/customize"
import Work from "../components/work"
import Graph from "../components/graph"

export default function Features() {
    return(
        <div className="max-w-7xl">
            <Notifications />
            <Data />
            <Assistant />
            <Chat />
            <Customize />
            <Work />
            <Graph />
        </div>
    )
}
