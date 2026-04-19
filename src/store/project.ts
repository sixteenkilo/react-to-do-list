// store/projectStore.ts
import { create } from "zustand";

interface Project {
    id: string;
    name: string;
    description: string;
}

interface ProjectStore {
    projects: Project[];
    addProject: (name: string, description: string) => void;
    updateProject: (id: string, name: string, description: string) => void;
    deleteProject: (id: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
    projects: [],

    addProject: (name, description) =>
        set((state) => ({
            projects: [
                ...state.projects,
                { id: crypto.randomUUID(), name, description },
            ],
        })),

    updateProject: (id, name, description) =>
        set((state) => ({
            projects: state.projects.map((p) =>
                p.id === id ? { ...p, name, description } : p,
            ),
        })),

    deleteProject: (id) =>
        set((state) => ({
            projects: state.projects.filter((p) => p.id !== id),
        })),
}));
