import { Stack } from "expo-router";
import HorizontalMenu from "../../components/HorizontalMenu";

export default function Layout() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
            <HorizontalMenu />
        </>
    );
}
