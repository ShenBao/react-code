import { SkinProvider } from "./context";
import Card from "@/pages/NumberOfSkinChanges/Card";
import Total from "@/pages/NumberOfSkinChanges/Total";

const NumberOfSkinChanges = () => {
    return (
        <SkinProvider>
            <h1>the number of skin changes</h1>
            <Total />
            <Card />
            <Card />
            <Card />
        </SkinProvider>
    )
}

export default NumberOfSkinChanges