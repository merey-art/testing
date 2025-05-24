import { getStateInstance } from '../api/greenApi';

describe('Instance Authorization', () => {
    it('should return authorized state', async () => {
        const response = await getStateInstance();
        expect(response.status).toBe(200);
        expect(response.data.stateInstance).toBe('authorized');
    });
});
