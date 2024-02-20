function Perfil() {
    return (
    <div className="ms-auto">
    <div className="d-flex align-items-center col">
        <div className="dropdown d-inline-block ms-2">
          <button type="button" className="btn btn-sm btn-alt-light d-flex align-items-center shadow-none text-dark" style={{'borderColor': 'rgba(185, 198, 202, 1)'}}
            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {/* <img className="rounded-circle" src="{{ MEDIA_URL }}{{ user.profile.avatar }}" alt="User Avatar"
              style={{'width': '21px;'}}></img> */}
            <span className="d-none d-sm-inline-block ms-2 fs-xs fw-semibold">
                teste
            </span>
            <i className="fa fs-xs fa-fw fa-angle-down d-none d-sm-inline-block ms-1 mt-1"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown">
            <div className="p-3 text-center bg-body-light border-bottom rounded-top">
              <img className="img-avatar img-avatar48 img-avatar-thumb" src="{{ MEDIA_URL }}{{ user.profile.avatar }}"
                alt="User Avatar"></img>
              <p className="mt-2 mb-0 fs-sm fw-bold">teste</p>
              <p className="mb-0 text-muted fs-xs fw-medium">teste</p>
            </div>
            <div className="p-2">
              <a className="dropdown-item d-flex align-items-center justify-content-between"
                href="{% url 'user.view' user.id %}">
                <span className="fs-xs fw-medium">Perfil Usuário</span>
              </a>
              <a className="dropdown-item d-flex align-items-center justify-content-between"
                href="{% url 'user.edit' user.id %}">
                <span className="fs-xs fw-medium">Editar Perfil</span>
              </a>
            </div>
            <div role="separator" className="dropdown-divider m-0"></div>
            <div className="p-2">
              <a className="dropdown-item d-flex align-items-center justify-content-between"
                href="{% url 'account_logout' %}">
                <span className="fs-xs fw-medium">Log Out</span>
              </a>
              <form id="logout-form" action="" method="POST">teste</form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
export default Perfil;

