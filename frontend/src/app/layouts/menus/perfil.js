function Perfil() {
    return (
    <div class="d-flex align-items-center col">
        <div class="dropdown d-inline-block ms-2">
          <button type="button" class="btn btn-sm btn-alt-light d-flex align-items-center shadow-none text-dark" style={{'border-color': 'rgba(185, 198, 202, 1);'}}
            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle" src="{{ MEDIA_URL }}{{ user.profile.avatar }}" alt="User Avatar"
              style={{'width': '21px;'}}></img>
            <span class="d-none d-sm-inline-block ms-2 fs-xs fw-semibold">
                teste
            </span>
            <i class="fa fs-xs fa-fw fa-angle-down d-none d-sm-inline-block ms-1 mt-1"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown">
            <div class="p-3 text-center bg-body-light border-bottom rounded-top">
              <img class="img-avatar img-avatar48 img-avatar-thumb" src="{{ MEDIA_URL }}{{ user.profile.avatar }}"
                alt="User Avatar"></img>
              <p class="mt-2 mb-0 fs-sm fw-bold">teste</p>
              <p class="mb-0 text-muted fs-xs fw-medium">teste</p>
            </div>
            <div class="p-2">
              <a class="dropdown-item d-flex align-items-center justify-content-between"
                href="{% url 'user.view' user.id %}">
                <span class="fs-xs fw-medium">Perfil Usuário</span>
              </a>
              <a class="dropdown-item d-flex align-items-center justify-content-between"
                href="{% url 'user.edit' user.id %}">
                <span class="fs-xs fw-medium">Editar Perfil</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
            <div class="p-2">
              <a class="dropdown-item d-flex align-items-center justify-content-between"
                href="{% url 'account_logout' %}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                <span class="fs-xs fw-medium">Log Out</span>
              </a>
              <form id="logout-form" action="" method="POST">teste</form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Perfil;

