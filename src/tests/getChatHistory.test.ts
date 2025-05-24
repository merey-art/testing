import { getChatHistory } from '../api/greenApi';

describe('GetChatHistory API', () => {
    it('should retrieve chat history', async () => {
        const response = await getChatHistory(5);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });
});
