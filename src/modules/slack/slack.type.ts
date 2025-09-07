export type SlackChannel = {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: string[];
    parent_conversation: string | null;
    purpose: {
        value: string;
        creator: string;
        last_set: number;
    };
    topic: {
        value: string;
        creator: string;
        last_set: number;
    };
    shared_team_ids: string[];
    pending_connected_team_ids: string[];
    is_member: boolean;
    num_members: number;
    properties?: {
        use_case?: string;
        is_dormant?: boolean;
        tabs?: {
            id: string;
            label: string;
            type: string;
        }[];
        tabz?: {
            type: string;
        }[];
    };
    frozen_reason?: string;
    previous_names: string[];
};

export type SlackChannelsResponse = {
    ok: boolean;
    channels: SlackChannel[];
    response_metadata: {
        next_cursor: string;
    };
};

export type SlackSendToChannelIdResponse = {
    ok: boolean;
    channel: string;
    ts: string;
    message: {
        user: string;
        type: string;
        ts: string;
        bot_id: string;
        app_id: string;
        text: string;
        team: string;
        bot_profile: {
            id: string;
            app_id: string;
            user_id: string;
            name: string;
            icons: {
                image_36: string;
                image_48: string;
                image_72: string;
            };
            deleted: boolean;
            updated: number;
            team_id: string;
        };
        blocks: {
            type: string;
            block_id: string;
            elements: {
                type: string;
                elements: {
                    type: string;
                    text: string;
                }[];
            }[];
        }[];
    };
    warning: string;
    response_metadata: {
        warnings: string[];
    };
};
