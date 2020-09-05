const FETCH_TAG_BY_ID = 'entity/tag/FETCH_TAG_BY_ID';
export const fetchTagById: reduxAction<{ tagId: number }> = {
	name: FETCH_TAG_BY_ID,
	action: (tagId: number) => ({ type: FETCH_TAG_BY_ID, payload: { tagId } })
};
export type fetchTagByIdType = ReturnType<typeof fetchTagById.action>;

const FETCH_ALL_TAGS = 'entity/tag/FETCH_ALL_TAGS';
export const fetchAllTags: reduxAction<{}> = {
	name: FETCH_ALL_TAGS,
	action: () => ({ type: FETCH_ALL_TAGS, payload: {} })
};
export type fetchAllTagsType = ReturnType<typeof fetchAllTags.action>;

const FETCH_TAGS_BY_IDS = 'entity/tag/FETCH_TAGS_BY_IDS';
export const fetchTagsByIds: reduxAction<{ tagIds: number[] }> = {
	name: FETCH_TAGS_BY_IDS,
	action: (tagIds: number[]) => ({ type: FETCH_TAGS_BY_IDS, payload: { tagIds } })
};
export type fetchTagsByIdsType = ReturnType<typeof fetchTagsByIds.action>;

const FETCH_TAGS_BY_PARENT_ID = 'entity/tag/FETCH_TAGS_BY_PARENT_ID';
export const fetchTagsByParentId: reduxAction<{ tagId: number }> = {
	name: FETCH_TAGS_BY_PARENT_ID,
	action: (tagId: number) => ({ type: FETCH_TAGS_BY_PARENT_ID, payload: { tagId } })
};
export type fetchTagsByParentIdType = ReturnType<typeof fetchTagsByParentId.action>;

const FETCH_TAGS_BY_NAME_JA = 'entity/tag/FETCH_TAGS_BY_NAME_JA';
export const fetchTagsByNameJa: reduxAction<{ nameJa: string }> = {
	name: FETCH_TAGS_BY_NAME_JA,
	action: (nameJa: string) => ({ type: FETCH_TAGS_BY_NAME_JA, payload: { nameJa } })
};
export type fetchTagsByNameJaType = ReturnType<typeof fetchTagsByNameJa.action>;

const CREATE_TAG = 'entity/tag/CREATE_TAG';
export const createTag: reduxAction<{ tag: TagEntity}> = {
	name: CREATE_TAG,
	action: (tag: TagEntity) => ({ type: CREATE_TAG, payload: { tag } })
};
export type createTagType = ReturnType<typeof createTag.action>;

const UPDATE_TAG = 'entity/tag/UPDATE_TAG';
export const updateTag: reduxAction<{ tag: TagEntity }> = {
	name: UPDATE_TAG,
	action: (tag: TagEntity) => ({ type: UPDATE_TAG, payload: { tag } })
};
export type updateTagType = ReturnType<typeof updateTag.action>;

const DELETE_TAG = 'entity/tag/DELETE_TAG';
export const deleteTag: reduxAction<{ tagId: number }> = {
	name: DELETE_TAG,
	action: (tagId: number) => ({ type: DELETE_TAG, payload: { tagId } })
};
export type deleteTagType = ReturnType<typeof deleteTag.action>;

// for calling reducers
const SET_TAGS = 'entity/tag/SET_TAGS';
export const setTags: reduxAction<{ tags: TagEntity[] }> = {
	name: SET_TAGS,
	action: (tags: TagEntity[]) => ({ type: SET_TAGS, payload: { tags } })
};
export type setTagsType = ReturnType<typeof fetchTagsByIds.action>;

// for calling reducers
const SET_SELECTED_TAG = 'entity/tag/SET_SELECTED_TAG';
export const setSelectedTag: reduxAction<{ tag: TagEntity }> = {
	name: SET_SELECTED_TAG,
	action: (tag: TagEntity) => ({ type: SET_SELECTED_TAG, payload: { tag } })
};
export type setSelectedTagType = ReturnType<typeof setSelectedTag.action>;