import {Link} from "react-router-dom"

const MenuPanel = () => {
    return (
        <div className="menu-panel" style={{display: "grid", rowGap: "10px", gridTemplateColumns: "repeat(4, auto)"}}>
            <Link to="/use">1.use</Link>
            <Link to="/suspense">2.suspense</Link>
            <Link to="/update_data">3.update data</Link>
            <Link to="/data_init_update">4.data init and update</Link>
            <Link to="/data_init_update_to_list">5.data init and update to list</Link>
            <Link to="/load_more_data">6.load more data</Link>
            <Link to="/search_case">7.search cases</Link>
            <Link to="/nested_suspense">8.nested suspense</Link>
            <Link to="/ref_usage">9.ref usage</Link>
            <Link to="/ref_control_modal">10.ref control modal</Link>
            <Link to="/context_base">11.context base</Link>
            <Link to="/skin_change_count">12.context-the number of skin changes</Link>
            <Link to="/use_deferred_value">12.useDeferredValue</Link>
            <Link to="/use_transition">13.useTransition</Link>
        </div>
    )
}

export default MenuPanel