using { sap.capire.bookshop as bookshop } from '../db/schema';

service CatalogService {

  entity Books       as projection on bookshop.Books;
  entity Authors     as projection on bookshop.Authors;
  entity Genres      as projection on bookshop.Genres;

  @cds.redirection.target
  entity ActiveBooks as projection on bookshop.ActiveBooks;
}
