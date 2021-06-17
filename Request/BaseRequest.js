class BaseRequest {
    static authorization(result) {
        alert(result.responseJSON.message);
        if (result.responseJSON.exception.includes('AccessDeniedException'))
            window.location.href = connecter.baseUrlAPI + "/login";
    }
}