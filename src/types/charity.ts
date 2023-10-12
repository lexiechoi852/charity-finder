export interface Charity {
    ein: string;
    name: string;
    logoUrl?: string;
    location: string;
}

export interface CharityDetail {
    id:                     string;
    name:                   string;
    isDisbursable:          boolean;
    locationAddress:        string;
    locationLatLng:         LocationLatLng;
    ein:                    string;
    description:            string;
    descriptionLong:        null;
    primarySlug:            string;
    logoCloudinaryId:       string;
    coverImageCloudinaryId: string;
    nteeCode:               string;
    nteeCodeMeaning:        NteeCodeMeaning;
    hasAdmin:               boolean;
    directDisbursement:     boolean;
    websiteUrl:             string;
    logoUrl:                string;
    coverImageUrl:          string;
    profileUrl:             string;
}

export interface LocationLatLng {
    type:        string;
    coordinates: number[];
}

export interface NteeCodeMeaning {
    majorCode:     string;
    majorMeaning:  string;
    decileCode:    string;
    decileMeaning: string;
}

export interface NonprofitTag {
    id:                   string;
    tagName:              string;
    causeCategory:        string;
    title:                string;
    tagImageCloudinaryId: string;
    tagUrl:               string;
    tagImageUrl:          string;
}