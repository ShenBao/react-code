import NormalCount from "@/pages/HookUseDeferredValue/NormalCount";
import DeferredValueCount from "@/pages/HookUseDeferredValue/DeferredValueCount";
import DeferredCountOptimize from "@/pages/HookUseDeferredValue/DeferredCountOptimize";

const HookUseDeferredValue = () => {
    return (
        <div>
            <h1>useDeferredValue hook</h1>
            <NormalCount />
            <hr/>
            <DeferredValueCount />
            <hr/>
            <DeferredCountOptimize />
        </div>
    )
}

export default HookUseDeferredValue