import {
  ACTION_ADD_STAGE,
  ACTION_CLONE_STAGE,
  ACTION_DELETE_STAGE,
  ACTION_RESET_WORKFLOW,
  ACTION_SET_CONTENT_TYPES,
  ACTION_SET_IS_LOADING,
  ACTION_SET_ROLES,
  ACTION_SET_WORKFLOW,
  ACTION_SET_WORKFLOWS,
  ACTION_UPDATE_STAGE,
  ACTION_UPDATE_STAGES,
  ACTION_UPDATE_STAGE_POSITION,
  ACTION_UPDATE_WORKFLOW,
} from '../constants';

export function cloneStage(id) {
  return {
    type: ACTION_CLONE_STAGE,
    payload: { id },
  };
}

export function setWorkflow({ workflow }) {
  return {
    type: ACTION_SET_WORKFLOW,
    payload: workflow,
  };
}

export function setWorkflows({ workflows }) {
  return {
    type: ACTION_SET_WORKFLOWS,
    payload: workflows,
  };
}

export function deleteStage(stageId) {
  return {
    type: ACTION_DELETE_STAGE,
    payload: {
      stageId,
    },
  };
}

export function addStage(stage = {}) {
  return {
    type: ACTION_ADD_STAGE,
    payload: stage,
  };
}

export function updateStage(stageId, payload) {
  return {
    type: ACTION_UPDATE_STAGE,
    payload: {
      stageId,
      ...payload,
    },
  };
}

export function updateStages(payload) {
  return {
    type: ACTION_UPDATE_STAGES,
    payload,
  };
}

export function updateStagePosition(oldIndex, newIndex) {
  return {
    type: ACTION_UPDATE_STAGE_POSITION,
    payload: {
      newIndex,
      oldIndex,
    },
  };
}

export function updateWorkflow(payload) {
  return {
    type: ACTION_UPDATE_WORKFLOW,
    payload,
  };
}

export function resetWorkflow() {
  return {
    type: ACTION_RESET_WORKFLOW,
  };
}

export function setContentTypes(payload) {
  return {
    type: ACTION_SET_CONTENT_TYPES,
    payload,
  };
}

export function setRoles(payload) {
  return {
    type: ACTION_SET_ROLES,
    payload,
  };
}

export function setIsLoading(isLoading) {
  return {
    type: ACTION_SET_IS_LOADING,
    payload: isLoading,
  };
}
