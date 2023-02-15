// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for home_hero documents */
interface HomeHeroDocumentData {
    /**
     * photo field in *home_hero*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.photo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    photo: prismicT.ImageField<never>;
    /**
     * title field in *home_hero*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *home_hero*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * presentation_area field in *home_hero*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    presentation_area: prismicT.GroupField<Simplify<HomeHeroDocumentDataPresentationAreaItem>>;
    /**
     * presentation_skills field in *home_hero*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    presentation_skills: prismicT.GroupField<Simplify<HomeHeroDocumentDataPresentationSkillsItem>>;
}
/**
 * Item in home_hero → presentation_area
 *
 */
export interface HomeHeroDocumentDataPresentationAreaItem {
    /**
     * comment field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].comment
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    comment: prismicT.KeyTextField;
    /**
     * title field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * open field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].open
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    open: prismicT.KeyTextField;
    /**
     * label_function field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].label_function
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_function: prismicT.KeyTextField;
    /**
     * content_function field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].content_function
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_function: prismicT.KeyTextField;
    /**
     * label_level field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].label_level
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_level: prismicT.KeyTextField;
    /**
     * content_level field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].content_level
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_level: prismicT.KeyTextField;
    /**
     * close field in *home_hero → presentation_area*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_area[].close
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    close: prismicT.KeyTextField;
}
/**
 * Item in home_hero → presentation_skills
 *
 */
export interface HomeHeroDocumentDataPresentationSkillsItem {
    /**
     * title field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * open field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].open
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    open: prismicT.KeyTextField;
    /**
     * label_tech_stack field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].label_tech_stack
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_tech_stack: prismicT.KeyTextField;
    /**
     * content_tech_stack field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].content_tech_stack
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_tech_stack: prismicT.KeyTextField;
    /**
     * label_frameworks field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].label_frameworks
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_frameworks: prismicT.KeyTextField;
    /**
     * content_frameworks field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].content_frameworks
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    content_frameworks: prismicT.KeyTextField;
    /**
     * close field in *home_hero → presentation_skills*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_hero.presentation_skills[].close
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    close: prismicT.KeyTextField;
}
/**
 * home_hero document from Prismic
 *
 * - **API ID**: `home_hero`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeHeroDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeHeroDocumentData>, "home_hero", Lang>;
/** Content for projects documents */
interface ProjectsDocumentData {
    /**
     * Title field in *projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * type field in *projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.type
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    type: prismicT.KeyTextField;
    /**
     * Project Link field in *projects*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.project_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project_link: prismicT.LinkField;
    /**
     * Thumb field in *projects*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.thumb
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumb: prismicT.ImageField<never>;
}
/**
 * projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectsDocumentData>, "projects", Lang>;
export type AllDocumentTypes = HomeHeroDocument | ProjectsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeHeroDocumentData, HomeHeroDocumentDataPresentationAreaItem, HomeHeroDocumentDataPresentationSkillsItem, HomeHeroDocument, ProjectsDocumentData, ProjectsDocument, AllDocumentTypes };
    }
}
