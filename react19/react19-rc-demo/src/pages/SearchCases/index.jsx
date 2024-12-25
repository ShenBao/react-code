import NormalSearchCase from "@/pages/SearchCases/NormalSearchCase";
import OptimizedSearchCases from "@/pages/SearchCases/OptimizedSearchCases";

const SearchCases = () => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h1>Search cases</h1>
            <hr/>
            <NormalSearchCase />
            <hr/>
            <OptimizedSearchCases />
        </div>
    )
}

export default SearchCases