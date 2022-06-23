function calc(){
  const now = new Date($("#start").val());
  const then = new Date($("#end").val());
  let gap = now.getTime() - then.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24));

  if (gap < 0) {
    $("#output").text(("D " + gap));
  }else {
    $("#output").text(("D + " + gap));
  }
}