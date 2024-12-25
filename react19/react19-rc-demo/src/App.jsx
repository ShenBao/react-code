import { Routes, Route } from "react-router-dom"
import UsePage from "@/pages/usePage";
import SuspensePage from "@/pages/SuspensePage";
import MenuPanel from "@/pages/MenuPanel";
import UpdateData from "@/pages/UpdateData";
import DataInitAndUpdate from "@/pages/DataInitAndUpdate";
import DataInitAndUpdateToList from "@/pages/DataInitAndUpdateToList";
import LoadMoreData from "@/pages/LoadMoreData";
import SearchCases from "@/pages/SearchCases";
import NestedSuspense from "@/pages/NestedSuspense";
import RefBlock from "@/pages/RefBlock";
import RefControlModal from "@/pages/RefControlModal";
import ContextBase from "@/pages/ContextBase";
import NumberOfSkinChanges from "@/pages/NumberOfSkinChanges";
import HookUseDeferredValue from "@/pages/HookUseDeferredValue";
import HookUseTransition from "@/pages/HookUseTransition";


function App() {
  return (
      <>
          <MenuPanel />
          <Routes>
              <Route path="/use" element={<UsePage />} />
              <Route path="/suspense" element={<SuspensePage />} />
              <Route path="/update_data" element={<UpdateData />} />
              <Route path="/data_init_update" element={<DataInitAndUpdate />} />
              <Route path="/data_init_update_to_list" element={<DataInitAndUpdateToList />} />
              <Route path="/load_more_data" element={<LoadMoreData />} />
              <Route path="/search_case" element={<SearchCases />} />
              <Route path="/nested_suspense" element={<NestedSuspense />} />
              <Route path="/ref_usage" element={<RefBlock />} />
              <Route path="/ref_control_modal" element={<RefControlModal />} />
              <Route path="/context_base" element={<ContextBase />} />
              <Route path="/skin_change_count" element={<NumberOfSkinChanges />} />
              <Route path="/use_deferred_value" element={<HookUseDeferredValue />} />
              <Route path="/use_transition" element={<HookUseTransition />} />
              <Route path="*" element={<UsePage />} />
          </Routes>
      </>
  )
}

export default App
