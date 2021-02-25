import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build a custom sidebar
export default function Sidebar() {
    return S.list()
        .title(`Slick's Slices`)
        .items([
            // create a new sub item
            S.listItem()
                .title('Home Page')
                .icon(() => <strong>SS</strong>)
                .child(
                    S.editor()
                        .schemaType('storeSettings')
                        // make a new document id so we dont have a random string of numbers
                        .documentId('downtown')
                ),
            // add in the rest
            ...S.documentTypeListItems().filter(
                (item) => item.getId() !== 'storeSettings'
            ),
        ]);
}
