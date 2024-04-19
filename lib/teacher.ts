import { currentProfile } from "./current-profile";

export const isTeacher = (userId?: string | null) => {
    // Fetching teacher IDs from environment variable and splitting them into an array
    const teacherIds = process.env.NEXT_PUBLIC_TEACHER_IDS?.split(',') || [];

    // Checking if the provided userId matches any of the teacher IDs
    return userId ? teacherIds.includes(userId) : false;
}