$mynewcolor:#77cccc;

.btn-primary {
    @include button-variant($mynewcolor, darken($mynewcolor, 7.5%), darken($mynewcolor, 10%), lighten($mynewcolor,5%), lighten($mynewcolor, 10%), darken($mynewcolor,30%));
}
  