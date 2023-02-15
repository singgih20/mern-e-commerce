import "../../chat.css"
const UserChatComponent = () => {
    return (
        <>
        <input type="checkbox" id="check" />
        <label className="chat-btn" htmlFor="check">
            <i class="bi bi-chat-dots comment"></i>
            <i class="bi bi-x-circle close"></i>
        </label>
        </>
    )
}

export default UserChatComponent