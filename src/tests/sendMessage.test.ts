import { sendMessage } from '../api/greenApi';

describe('SendMessage API', () => {
    it('should send a message successfully', async () => {
        const response = await sendMessage('Hello from test!');
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('idMessage');
    });

    it('should return 400 when missing message field', async () => {
        try {
            // @ts-expect-error testing missing message
            await sendMessage();
        } catch (error) {
            const err = error as any;
            expect(err.response.status).toBe(400);
        }
    });
});
