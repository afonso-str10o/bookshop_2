using CatalogService as service from '../../srv/catalog-service';

annotate service.Books with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'ID',
                Value: ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'title',
                Value: title,
            },
            {
                $Type: 'UI.DataField',
                Label: 'descr',
                Value: descr,
            },
            {
                $Type: 'UI.DataField',
                Label: 'author_ID',
                Value: author_ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'genre_ID',
                Value: genre_ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'stock',
                Value: stock,
            },
            {
                $Type: 'UI.DataField',
                Label: 'price',
                Value: price,
            },
            {
                $Type: 'UI.DataField',
                Label: 'currency_code',
                Value: currency_code,
            },
            {
                $Type: 'UI.DataField',
                Label: 'startDate',
                Value: startDate,
            },
            {
                $Type: 'UI.DataField',
                Label: 'endDate',
                Value: endDate,
            },
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Label: 'ID',
            Value: ID,
        },
        {
            $Type: 'UI.DataField',
            Label: 'title',
            Value: title,
        },
        {
            $Type: 'UI.DataField',
            Label: 'descr',
            Value: descr,
        },
        {
            $Type: 'UI.DataField',
            Label: 'author_ID',
            Value: author_ID,
        },
        {
            $Type: 'UI.DataField',
            Label: 'genre_ID',
            Value: genre_ID,
        },
    ],
    UI.SelectionFields           : [
        title,
        descr,
    ],
);

annotate service.Books with {
    descr @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'BookValueHelp',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: descr,
                    ValueListProperty: 'descr'
                },
                {
                    $Type            : 'Common.ValueListParameterIn',
                    LocalDataProperty: title,
                    ValueListProperty: 'title'
                }
            ],
            Label         : 'DescrVH'
        },
        Common.ValueListWithFixedValues: true
    )
};


annotate service.Books with {
    title @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Booktitles',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: title,
                    ValueListProperty: 'title'
                },
            ],
            Label         : 'TitleVH'
        },
        Common.ValueListWithFixedValues: true
    )
};
