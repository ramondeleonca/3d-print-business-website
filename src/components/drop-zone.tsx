import React, { DetailedHTMLProps, DragEvent, HTMLAttributes, createContext, useContext, useRef, useState } from "react";

export type DropZoneContextType = {
    isDragging: boolean;
    files: File[];
};
const DropZoneContext = createContext<DropZoneContextType | null>(null);

export type DropZoneProps = { children: React.ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default function DropZone(props: DropZoneProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleDragEnter = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        // Extract dropped files
        setFiles((prevFiles) => Array.from(new Set([...prevFiles, ...Array.from(e.dataTransfer.files)])));
    };

    return (
        <DropZoneContext.Provider value={{ isDragging, files }}>
            <div
                {...props}
                ref={wrapperRef}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {props.children}
            </div>
        </DropZoneContext.Provider>
    );
}

export function useDropZone() {
    return useContext(DropZoneContext);
}