import React from 'react';
import { shallow } from 'enzyme';
import { NewRecipeModal, mapStateToProps } from '../../../src/containers/NewRecipeModal';
import { MODAL_TYPE_NEW_RECIPE, MODAL_TYPE_NONE } from '../../../src/constants/modal-types';

describe('NewRecipeModal', () => {
  describe('mapStateToProps', () => {
    it('should return isOpen as true when MODAL_TYPE_NEW_RECIPE should open', () => {
      const store = {
        status: {
          modal: {
            isOpen: true,
            modalType: MODAL_TYPE_NEW_RECIPE,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isOpen: true,
      });
    });

    it('should return isOpen as false when a modal (not MODAL_TYPE_NEW_RECIPE) should open', () => {
      const store = {
        status: {
          modal: {
            isOpen: true,
            modalType: MODAL_TYPE_NONE,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isOpen: false,
      });
    });

    it('should return isOpen as false when no modal should open', () => {
      const store = {
        status: {
          modal: {
            isOpen: false,
            modalType: MODAL_TYPE_NONE,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isOpen: false,
      });
    });
  });
  describe('NewRecipeModal (as Component)', () => {
    it('should be a visible modal', () => {
      const component = (
        <NewRecipeModal
          isOpen
          onRequestClose={() => {}}
          onRequestCreateRecipe={() => {}}
        />
      );
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should be an invisible modal', () => {
      const component = (
        <NewRecipeModal
          isOpen={false}
          onRequestClose={() => {}}
          onRequestCreateRecipe={() => {}}
        />
      );
      expect(shallow(component)).toMatchSnapshot();
    });
  });
});
