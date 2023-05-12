import React from "react";

export default function Badge({ type }) {
    switch (type) {
        case "complete":
            return (
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-accent">
                    Complete
                </span>
            );
        case "incomplete":
            return (
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-yellow-600">
                    Incomplete
                </span>
            );
        default:
            return (
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-yellow-600">
                    In-Progress
                </span>
            );
    }
}
