import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'app', 'data', 'site-content.json');

export const contentService = {
    getAllContent: async () => {
        try {
            const data = fs.readFileSync(contentPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading content file:', error);
            return {};
        }
    },

    updateContent: async (content: any) => {
        try {
            fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
            return { success: true };
        } catch (error) {
            console.error('Error writing content file:', error);
            return { success: false, error };
        }
    }
};
