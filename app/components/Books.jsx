import React from 'react';

const books = [
   {
      "bib_key":"0596000278",
      "info_url":"https://books.google.com/books?id=xx5JBSqcQzIC\u0026hl=ru\u0026source=gbs_ViewAPI",
      "preview_url":"https://books.google.com/books?id=xx5JBSqcQzIC\u0026printsec=frontcover\u0026hl=ru\u0026source=gbs_ViewAPI",
      "thumbnail_url":"https://books.google.com/books/content?id=xx5JBSqcQzIC\u0026printsec=frontcover\u0026img=1\u0026zoom=5\u0026edge=curl",
      "preview":"partial",
      "embeddable":true,
      "can_download_pdf":false,
      "can_download_epub":false,
      "is_pdf_drm_enabled":false,
      "is_epub_drm_enabled":false
   },
   {
      "bib_key":"ISBN0765304368",
      "info_url":"https://books.google.com/books?id=GP_cECbJyi8C\u0026hl=ru\u0026source=gbs_ViewAPI",
      "preview_url":"https://books.google.com/books?id=GP_cECbJyi8C\u0026hl=ru\u0026source=gbs_ViewAPI",
      "thumbnail_url":"https://books.google.com/books/content?id=GP_cECbJyi8C\u0026printsec=frontcover\u0026img=1\u0026zoom=5",
      "preview":"noview",
      "embeddable":false,
      "can_download_pdf":false,
      "can_download_epub":false,
      "is_pdf_drm_enabled":false,
      "is_epub_drm_enabled":false
   },
   {
      "bib_key":"0439554934",
      "info_url":"https://books.google.com/books?id=NjdlPgAACAAJ\u0026hl=ru\u0026source=gbs_ViewAPI",
      "preview_url":"https://books.google.com/books?id=NjdlPgAACAAJ\u0026hl=ru\u0026source=gbs_ViewAPI",
      "thumbnail_url":"https://books.google.com/books/content?id=NjdlPgAACAAJ\u0026printsec=frontcover\u0026img=1\u0026zoom=5",
      "preview":"noview",
      "embeddable":false,
      "can_download_pdf":false,
      "can_download_epub":false,
      "is_pdf_drm_enabled":false,
      "is_epub_drm_enabled":false
   }
]

export default () => (
    <table>
        <tr>
            <th>pic</th>
            <th>info</th>
            <th>preview</th>
            <th>embeddable</th>
        </tr>

        {books.map(book =>
            <tr id={book.bib_key}>
                <td><img src={book.thumbnail_url}/></td>
                <td><a href={book.info_url}>info</a></td>
                <td><a href={book.preview_url}>preview</a></td>
                <td>{book.embeddable ? 'can be embedded' : 'prohibited'}</td>
            </tr>
        )}

    </table>
)