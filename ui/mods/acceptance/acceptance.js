(function() {
  var login = function() {
    if (model.hasCmdLineTicket() || model.useSteam()) {
      model.ubernetLoginIn();
    }
  }

  // prevents eula from coming up
  if (model.showingEULA()) {
    model.mode(1);
  }

  model.hasSetupInfo.subscribe(function() {
    setTimeout(login, 0)
  })

})()
