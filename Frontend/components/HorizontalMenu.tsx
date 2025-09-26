import React, { useState } from "react";
import { View, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { MotiView, AnimatePresence } from "moti";
import { Ionicons } from "@expo/vector-icons";

const HorizontalMenu = () => {
    const [expanded, setExpanded] = useState(false);

    const items = [
        { icon: "image" },
        { icon: "mic" },
    ];

    return (
        <SafeAreaView style={styles.overlay}>
            <View style={styles.menuRow}>
                {items.map((item, index) => {
                    const distance = 70;
                    const x = -(index + 1) * distance;

                    return (
                        <AnimatePresence key={item.icon}>
                            {expanded && (
                                <MotiView
                                    from={{ translateX: 0, opacity: 0, scale: 0.8 }}
                                    animate={{ translateX: x, opacity: 1, scale: 1 }}
                                    exit={{ translateX: 0, opacity: 0, scale: 0.8 }}
                                    transition={{
                                        type: "spring",
                                        damping: 18,
                                        stiffness: 180,
                                        delay: index * 100,
                                    }}
                                    style={styles.menuItem}
                                >
                                    <Ionicons name={item.icon as any} size={22} color="white" />
                                </MotiView>
                            )}
                        </AnimatePresence>
                    );
                })}

                <Pressable
                    onPress={() => setExpanded(!expanded)}
                    style={styles.fab}
                >
                    <Ionicons name={expanded ? "close" : "add"} size={28} color="white" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default HorizontalMenu;

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 999,
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#222728",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#AFAEAE",
    },
    menuItem: {
        width: 50,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#AFAEAE",
        borderRadius: 25,
        backgroundColor: "#2C3536",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
});
