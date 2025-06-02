Sure, here's the contents for the file `/arkai/arkai/src/stores/workspaceStore.ts`:

import { makeAutoObservable } from "mobx";

class WorkspaceStore {
    files: string[] = [];
    directories: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setFiles(files: string[]) {
        this.files = files;
    }

    setDirectories(directories: string[]) {
        this.directories = directories;
    }

    addFile(file: string) {
        this.files.push(file);
    }

    removeFile(file: string) {
        this.files = this.files.filter(f => f !== file);
    }

    addDirectory(directory: string) {
        this.directories.push(directory);
    }

    removeDirectory(directory: string) {
        this.directories = this.directories.filter(d => d !== directory);
    }
}

export const workspaceStore = new WorkspaceStore();