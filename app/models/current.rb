class Current < ActiveSupport::CurrentAttributes
  attribute :session
  attribute :user_agent, :ip_address

  delegate :user, to: :session, allow_nil: true

  def user
    session&.user || Visitor.new
  end

  def signed_in?
    session.present?
  end

  class Visitor
    def email
      "anonymous@anonymous.com"
    end
  end
end
