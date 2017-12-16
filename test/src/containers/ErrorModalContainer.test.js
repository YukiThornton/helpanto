import { mapStateToProps } from '../../../src/containers/ErrorModalContainer';

describe('ErrorModalContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an message and isOpen as true', () => {
      const messages = ['message1', 'message2'];
      const store = {
        error: {
          exists: true,
          messages,
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isOpen: true,
        message: messages[0],
      });
    });

    it('should return isOpen as false', () => {
      const messages = [];
      const store = {
        error: {
          exists: false,
          messages,
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isOpen: false,
        message: messages[0],
      });
    });
  });
});
